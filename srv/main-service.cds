using { zthe as my } from '../db/schema';
service MainService { 
  entity Fields as projection on my.Fields;
  entity Images as projection on my.Images;
}
