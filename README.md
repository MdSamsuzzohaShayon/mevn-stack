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
