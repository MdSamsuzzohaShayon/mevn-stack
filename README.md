 - [Referance](https://www.section.io/engineering-education/build-a-graphql-server-using-nodejs/)
 

### Query 
 1. Get club
    ```
    query{
        club(id: 12){
            id
            name
        }
    }
    ```

 2. Get single club
    ```
    query{
        singleClub(id: "12"){
            id
        }
    }
    ```






### Mutation 

 1. Add club
    ```
    mutation{
        addClub(name: "some name" league: "some league"){
            name
            league
        }
    }
    ```

 2. Update club
    ```
    mutation{
        updateClub(id: "1" name:"Some name" league: "La Liga"){
            id
        }
    }
    ```

### Vue3 Apollo
 - __https://www.learmoreseekmore.com/2021/08/vue3-consume-graphql-endpoint-using-vue-apollo.html__
 - __https://v4.apollo.vuejs.org/guide-composable/query.html#result-picking__
 - __https://v4.apollo.vuejs.org/migration/#apollo-setup__

