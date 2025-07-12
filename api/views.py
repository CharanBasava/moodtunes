from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import requests
from decouple import config

# Load API tokens from .env
HUGGINGFACE_API_TOKEN = config("HUGGINGFACE_API_TOKEN")
SPOTIFY_CLIENT_ID = config("SPOTIFY_CLIENT_ID")
SPOTIFY_CLIENT_SECRET = config("SPOTIFY_CLIENT_SECRET")


@csrf_exempt
def mood_to_music(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)
            user_text = data.get("text", "")
            mood = detect_mood(user_text)
            songs = get_spotify_tracks(mood)

            return JsonResponse({
                "mood": mood,
                "songs": songs
            })

        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Only POST method is allowed"}, status=405)


# --- Helpers ---

def detect_mood(text):
    url = "https://api-inference.huggingface.co/models/bhadresh-savani/distilbert-base-uncased-emotion"
    headers = {
        "Authorization": f"Bearer {HUGGINGFACE_API_TOKEN}"
    }
    payload = {"inputs": text}

    response = requests.post(url, headers=headers, json=payload)
    result = response.json()

    if isinstance(result, list) and result:
        top_emotion = result[0][0]  # top prediction
        label = top_emotion["label"]
        score = top_emotion["score"]

        if score >= 0.5:
            return map_to_custom_mood(label)
        else:
            return "neutral"  # fallback for unclear emotion

    return "neutral"


def map_to_custom_mood(emotion):
    emotion_map = {
        "joy": "happy",
        "sadness": "sad",
        "anger": "angry",
        "love": "love",
        "fear": "relaxed",
        "surprise": "happy",
        "neutral": "neutral"  # add fallback
    }
    return emotion_map.get(emotion.lower(), "neutral")




def get_spotify_token():
    url = "https://accounts.spotify.com/api/token"
    headers = {
        "Content-Type": "application/x-www-form-urlencoded"
    }
    data = {
        "grant_type": "client_credentials",
        "client_id": SPOTIFY_CLIENT_ID,
        "client_secret": SPOTIFY_CLIENT_SECRET
    }

    response = requests.post(url, headers=headers, data=data)
    access_token = response.json().get("access_token")
    return access_token

def get_spotify_tracks(mood):
    access_token = get_spotify_token()

    mood_queries = {
        "sad": "sad acoustic",
        "happy": "happy upbeat",
        "angry": "angry rock",
        "love": "romantic love songs",
        "relaxed": "chill lofi beats",
        "neutral": "ambient instrumental music"
    }

    query = mood_queries.get(mood, mood)
    url = f"https://api.spotify.com/v1/search?q={query}&type=track&limit=30"
    headers = {
        "Authorization": f"Bearer {access_token}"
    }

    response = requests.get(url, headers=headers)
    items = response.json().get("tracks", {}).get("items", [])

    songs = []
    for item in items:
        songs.append({
            "id": item["id"],  # <-- ADD THIS
            "name": item["name"],
            "artist": item["artists"][0]["name"],
            "url": item["external_urls"]["spotify"]
        })

    return songs

