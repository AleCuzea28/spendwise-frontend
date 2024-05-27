import { SpendWiseClient } from "../Base/BaseApiClient";
import { CategoryModel } from "../Models/CategoryModel";

export const CategoriesApiClient = {
  urlPath: "categories",

  getAllAsync(): Promise<CategoryModel[]> {
    return SpendWiseClient.get<CategoryModel[]>(this.urlPath).then(
      (response) => response.data
    );
  },

  getOneAsync(id: number): Promise<CategoryModel> {
    return SpendWiseClient.get<CategoryModel>(
      this.urlPath + "/" + id // this.urlPath + "/" + id
    ).then((response) => response.data);
  },

  createOneAsync(model: CategoryModel): Promise<CategoryModel> {
    return SpendWiseClient.post<CategoryModel>(
      this.urlPath, // this.urlPath
      model
    ).then((response) => response.data);
  },

  deleteOneAsync(id: number): Promise<any> {
    return SpendWiseClient.delete(this.urlPath + "/" + id).then(
      (response) => response.data
    );
  },

  updateOneAsync(id: number, model: CategoryModel): Promise<CategoryModel> {
    return SpendWiseClient.put<CategoryModel>(
      this.urlPath + "/" + id,
      model
    ).then((response) => response.data);
  },
};
