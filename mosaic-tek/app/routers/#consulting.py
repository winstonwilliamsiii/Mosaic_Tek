#consulting

from fastapi import APIRouter

router = APIRouter(
    prefix="/consulting",
    tags=["consulting"]
)

@router.get("/")
def get_consulting_info():
    return {
        "service": "Cloud Consulting",
        "description": "Mosaic-Tek provides expert guidance on cloud adoption, migration, and optimization."
    }

@router.get("/contact")
def contact():
    return {
        "email": "info@mosaic-tek.com",
        "phone": "+57-300-000-0000"
    }
