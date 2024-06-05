import os
import requests

# List of item IDs, their corresponding filenames, and item names
items = [
    (23932, "Caixa de Consumíveis da Rifa A"),
    (23932, "Caixa de Consumíveis da Rifa B"),
    (23932, "Caixa de Consumíveis da Rifa C"),
    (23932, "Caixa de Consumíveis da Rifa D"),
    (23932, "Caixa de Consumíveis da Rifa E"),
    (23932, "Caixa de Consumíveis da Rifa F"),
    (12259, "Medicina Milagrosa"),
    (22999, "Pergaminho do Éden"),
    (12214, "Espelho Convexo"),
    (7621, "Amuleto de Ziegfried"),
    (14653, "Caixa de Auxiliares Dourados A"),
    (14659, "Caixa de Conversores Etéreos"),
    (14653, "Caixa de Consumíveis Dourados"),
    (23044, "Doce de Elvira"),
    (12710, "Poção de Guyak"),
    (12016, "Poção do Vento"),
    (12247, "Salada de Frutas Tropicais"),
    (12111, "Trouxinha de Comidas Especiais"),
    (14653, "Caixa de Munições Douradas"),
    (17733, "Caixa de Conversores Elementais"),
    (14653, "Caixa de Auxiliares Dourados B"),
    (17734, "Caixa de Suprimentos de Classe"),
    (14653, "Caixa de Ingredientes Dourados"),
    (14659, "Caixa de Xaropes"),
    (14600, "Poção Mental"),
    (102501, "Incenso Queimado"),
    (12857, "Pedra de Selamento Dourada"),
    (23932, "Caixa de Consumíveis da Rifa G")
]

# Base URL for downloading images
base_url = "https://static.divine-pride.net/images/items/item/"

# Create directory to save images if it doesn't exist
os.makedirs('images', exist_ok=True)

# Function to download and save an image
def download_image(item_id, item_name):
    url = f"{base_url}{item_id}.png"
    filename = f"icon_{item_id}.png"
    response = requests.get(url)
    if response.status_code == 200:
        with open(os.path.join('images', filename), 'wb') as f:
            f.write(response.content)
        print(f"Downloaded {filename} ({item_name})")
    else:
        print(f"Failed to download {filename} ({item_name})")

# Download each image
for item_id, item_name in items:
    download_image(item_id, item_name)
