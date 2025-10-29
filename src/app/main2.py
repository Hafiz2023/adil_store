from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
main2 = FastAPI()

# Allow CORS for frontend
main2.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Product model
class Product(BaseModel):
    id: int
    name: str
    brand: str
    price: str
    image: str
    rating: float

# Demo Data (replace with database later)
products_db = [
    {"id": 1, "name": "Mac Low Runner", "brand": "Fear of God", "price": "$799.00", "image": "/Home-page-pic/1.jpg", "rating": 4.5},
    {"id": 3, "name": "Eva Runner", "brand": "Fear of God", "price": "$299.00", "image": "/Home-page-pic/1 (3).jpg", "rating": 4.2},
    {"id": 4, "name": "8 Tee", "brand": "Fear of God", "price": "$349.00", "image": "/Home-page-pic/1 (4).jpg", "rating": 4.8},
    {"id": 5, "name": "French Terry Hoodie", "brand": "Fear of God", "price": "$699.00", "image": "/Home-page-pic/1 (5).jpg", "rating": 5},
]
main2.get("/products", response_model=List[Product])
def get_products():
    return products_db

main2.post("/products", response_model=Product)
def add_product(product: Product):
    products_db.append(product.dict())
    return product
