import {Router} from "express";

import {CreateUserController} from "./controller/user/CreateUserController";
import {ListUserController} from "./controller/user/ListUserController";
import {UpdateUserController } from "./controller/user/UpdateUserController";
import {DeleteUserController } from "./controller/user/DeleteUserController";

import { CreateCategoryController } from "./controller/category/CreateCategoryController";
import {ListCategoryController} from "./controller/category/ListCategoryController";
import { UpdateCategoryController } from "./controller/category/UpdateCategoryController";
import { DeleteCategoryController } from "./controller/category/DeleteCategoryController";

import { CreateProductController } from "./controller/products/CreateProductsController";
import { ListProductController } from "./controller/products/ListProductsController";
import { UpdateProductController } from "./controller/products/UpdateProductsController";
import { DeleteProductController } from "./controller/products/DeleteProductsController";

import {CreateSaleController} from "./controller/sales/CreateSalesController";
import { ListSaleController } from "./controller/sales/ListSalesController";
import { UpdateSalesController } from "./controller/sales/UpdateSalesController";
import { DeleteSaleController } from "./controller/sales/DeleteSalesController";

import { CreatePackingController } from "./controller/packing/CreatePackingController";
import { ListPackingController } from "./controller/packing/ListPackingController";
import { UpdatePackingController } from "./controller/packing/UpdatePackingController";
import { DeletePackingController } from "./controller/packing/DeletePackingController";

import { CreateClientController } from "./controller/client/CreateClientController";
import {ListClientController} from "./controller/client/ListClientController";
import { UpdateClientController } from "./controller/client/UpdateClientController";
import { DeleteClientController } from "./controller/client/DeleteClientController";


import { AuthClientController } from "./controller/auth/AuthController";

import {ensureAuthenticated} from "./midleware/ensureAutenticated";

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const updateCategoryController = new UpdateCategoryController();
const deleteCategoryController = new DeleteCategoryController();

const createProductController = new CreateProductController();
const listProductController = new ListProductController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();

const createSaleController = new CreateSaleController();
const listSaleController = new ListSaleController();
const updateSaleController = new UpdateSalesController();
const deleteSaleController = new DeleteSaleController();

const createPackingController = new CreatePackingController();
const listPackingController = new ListPackingController();
const updatePackingController = new UpdatePackingController();
const deletePackingController = new DeletePackingController();

const createClientController = new CreateClientController();
const listClientController = new ListClientController();
const updateClientController = new UpdateClientController();
const deleteClientController = new DeleteClientController();

const authClientController = new AuthClientController();


const router = Router();

router.post("/users",createUserController.handle);

router.post("/auth",authClientController.handle);
router.use(ensureAuthenticated);

router.get("/users",listUserController.handle);
router.put("/users/:id",updateUserController.handle);
router.delete("/users/:id",deleteUserController.handle);

router.post("/category",createCategoryController.handle);
router.get("/category",listCategoryController.handle);
router.put("/category/:id",updateCategoryController.handle);
router.delete("/category/:id",deleteCategoryController.handle);

router.post("/product",createProductController.handle);
router.get("/product",listProductController.handle);
router.put("/product/:id",updateProductController.handle);
router.delete("/product/:id",deleteProductController.handle);

router.post("/sales",createSaleController.handle);
router.get("/sales",listSaleController.handle);
router.put("/sales/:id",updateSaleController.handle);
router.delete("/sales/:id",deleteSaleController.handle);

router.post("/packing",createPackingController.handle);
router.get("/packing",listPackingController.handle);
router.put("/packing/:id",updatePackingController.handle);
router.delete("/packing/:id",deletePackingController.handle);

router.post("/client",createClientController.handle);
router.get("/client",listClientController.handle);
router.put("/client/:id",updateClientController.handle);
router.delete("/client/:id",deleteClientController.handle);

export {router};
