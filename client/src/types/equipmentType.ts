export type EquipmentType = {
    id: number;
    name: string;
    price: number;
    description: string;
    pathImg: string;
    catEId: number;
    userId: number;
}

export type CategoryEquipmentType = {
    id: number;
    name: string;
    equipments: EquipmentType[]
}


