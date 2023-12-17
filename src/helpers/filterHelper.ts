import { Query } from "mongoose";
import { TQueryObj } from "../types/TQueryObj";

export const filter=<T>(modelQuery:Query<T[],T>,queryObj:TQueryObj)=>{
    const excludedFields= ['page','searchTerm','limit','sortBy','sort','sortOrder','fields'];
    excludedFields.forEach((element)=> delete queryObj[element]);
  
     modelQuery= modelQuery.find(queryObj);
    return modelQuery;
    
  }
  