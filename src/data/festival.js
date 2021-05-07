import axios from 'axios';

class Festival {
    constructor() {
        this.festival = axios.create({
            baseURL: 'http://api.visitkorea.or.kr/openapi/service',
           
        });
    }
    
    async festivalData() {
        const response = await this.festival.get("/rest/KorService/searchFestival?serviceKey=L2W%2FBNzWhCoJV%2F8gq1%2BNd%2Fhsm%2BylsyWMJxDnD3ZzIx3%2FltSKOKVOSXIfqdEBtVqJGSXC%2BPBranUO%2FrNfskcUAw%3D%3D", {
          params: {
            numOfRows: 20,
            pageNo: 1,
            _type: "json",
            arrange: "A",
            listYN: "Y",
            eventStartDate: 20210501,
            MobileOS: "ETC",
            MobileApp: "AppTest",
          },
        });
        return response.data.response.body.items.item;
    }   
}

export default Festival;