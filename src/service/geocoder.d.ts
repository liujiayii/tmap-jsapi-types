declare namespace T {
  class Geocoder {
    /** 创建一个地址解析器的实例。此类用于获取用户的地址解析 */
    constructor();

    /** 对指定的坐标点进行反地址解析。如果解析成功，则回调函数的参数为GeocoderResult对象。 */
    getLocation(point: LngLat, callback: GeocoderGetLocationCallback): void;

    /** 对指定的地址进行地址解析。如果解析成功，则回调函数的参数为GeocoderResult对象。 */
    getPoint(loction: string, callback: GeocoderGetPointCallback): void;
  }

  /** 此类表示Geocoder的地址解析结果。它在地址解析的回调函数的参数中返回，不可实例化。 */
  interface GeocoderResult {

    /** 返回响应结果。 */
    getStatus: () => number;

    /** 返回响应信息。 */
    getMsg: () => string;

    /** 获取此点坐标。 */
    getLocationPoint: () => LngLat;

    /** 获取详细地址。 */
    getAddress: () => string | null;

    /** 获取此点的详细信息。 */
    getAddressComponent: () => AddressComponent;

    /** 获取此点类别。 */
    getLocationLevel: () => string | undefined;
  }

  /** 此类表示地址解析结果的层次化地址信息，没有构造函数，通过对象字面量形式表示。 */
  interface AddressComponent {
    /** 此点最近地点信息 */
    address: string;

    /** 此点距离最近地点信息距离 */
    address_distance: number;

    /** 此点在最近地点信息方向 */
    address_position: string;

    /** 此点所在国家或城市或区县 */
    city: string;

    /** 距离此点最近poi点 */
    poi: string;

    /** 距离此点最近poi点的距离 */
    poi_distance: number;

    /** 此点在最近poi点的方向 */
    poi_position: string;

    /** 距离此点最近的路 */
    road: string;

    /** 此点距离此路的距离 */
    road_distance: number;

    /** (文档未给出) 层次化地址信息的详细结果 */
    addressComponent: AddressComponentDetail;
  }

  /** 地址解析结果的层次化地址信息的详细版本 */
  interface AddressComponentDetail {

    /** 此点最近地点信息 */
    address: string;

    /** 此点最近地点信息 */
    address_distance: number;

    /** 此点在最近地点信息方向 */
    address_position: string;

    /** 此点所在国家 */
    nation: string;

    /** 此点所在省份 */
    province: string;

    /** 此点所在省份代码  由国家代码ISO 3166-1（固定为156）+ 省份代码（6位）拼接组成 */
    province_code: string;

    /** 此点所在城市 */
    city: string;

    /** 此点所在城市代码 由国家代码ISO 3166-1（固定为156）+ 城市代码（6位）拼接组成 */
    city_code: number;

    /** 此点所在区县 */
    county: string;

    /** 此点所在区/县代码  由国家代码ISO 3166-1（固定为156）+ 区/县代码（6位）拼接组成 */
    county_code: string;

    /** 此点所在乡/镇/街道 */
    town: string;

    /** 此点所在乡/镇/街道代码  由国家代码ISO 3166-1（固定为156）+ 区/县代码（6位）+ 乡/镇/街道 代码（3位）拼接组成 */
    town_code: string;

    /** 距离此点最近路 */
    road: string;

    /** 此点距离此路的距离 */
    road_distance: number;

    /** 距离此点最近poi点 */
    poi: string;

    /** 距离此点最近poi点的距离 */
    poi_distance: number;

    /** 此点在最近poi点的方向 */
    poi_position: string;

  }

  type GeocoderGetLocationCallback = (result: GeocoderResult) => void;

  type GeocoderGetPointCallback = (result: GeocoderResult) => void;

}
