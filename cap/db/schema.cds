using {
  cuid,
  managed,
  sap
} from '@sap/cds/common';

namespace zthe;

entity Fields : managed, cuid {
  title  : String(111);
  descr  : String(1111);
  images : Composition of many Images
             on images.field = $self;

}

entity Images : managed, cuid {
  field     : Association to Fields;
  plants    : Composition of many Plants
                on plants.image = $self;

  @Core.MediaType  : mediaType
  content   : LargeBinary;

  @Core.IsMediaType: true
  mediaType : String;
  fileName  : String;
  size      : Integer;
  url       : String;
}

entity Plants : managed, cuid {
  name  : String(111);
  image : Association to Images;
  type  : String(111);

}
