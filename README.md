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
