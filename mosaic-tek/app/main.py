-- Active: 1763499046791@@127.0.0.1@3306@mysql
from fastapi import FastAPI

app = FastAPI(title="Mosaic-Tek Consulting")

@app.get("/")
def read_root():
    return {"message": "Welcome to Mosaic-Tek Consulting"}

@app.get("/about")
def about():
    return {"info": "We provide cloud consulting services."}

