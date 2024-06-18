import singleton from "../Server/data_example";

export function sortData()
{

    var arr= singleton.getService;
    arr=  arr.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });

      return arr;



}











