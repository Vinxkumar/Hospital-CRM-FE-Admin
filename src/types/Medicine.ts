export type InventoryRequest = {
    expireAt?: string;
    manufacturedAt?: string;
    inStock?: number;
    totalQuantity?: number;
    perPrice?: number;
    manufacturer?: string;
    batchNo?: string;
};

export type Medicine = {
    medicineFullName?: string;
    medicineGenericName?: string;
    dosageForm?: string;
    medicineCategories?: string[];
    manufacturer?: string;
    strengthMg_Ml?: string;
    inventoryRequest?: InventoryRequest;
};

export type UpdateMedicine = {
    perPrice?: number;
    expireAt?: string;
    manufacturedAt?: string;
    batchNo?: string;
};
