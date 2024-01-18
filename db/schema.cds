using { cuid , managed, sap } from '@sap/cds/common';

namespace zthe;

entity Fields : managed, cuid  { 
  title  : String(111);
  descr  : String(1111);
  images : Composition of many Images on images.field = $self;

}

entity Images : managed, cuid  { 
  name   : String(111);
  field  : Association to Fields;
}