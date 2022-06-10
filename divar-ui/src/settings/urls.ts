import {environment} from '../environments/environment';

export class Urls {

  public static baseurl = environment.baseurl;
  public static Menu = Urls.baseurl + '/api/v1.0/app-menus/allmenus/list';
  public static Yarane = Urls.baseurl + '/api/request';
  public static CitiesByProvince = Urls.baseurl + '/api/request/cities/{id}';
  public static Provinces = Urls.baseurl + '/api/request/provinces';



  public static Categories = Urls.baseurl + '/categories';
    public static Login = Urls.baseurl + '/login';
 }
