# Api_mobile

**External Hoteles Service**
----
* **URL**

  /
  
* **Method:**
    `GET`
      
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{
                    "_id": "59e8e2a03ab7d4019e3f4a48",
                    "name": "Brekke Inc",
                    "starts": 4,
                    "price": 463,
                    "address": "1398 Crystel Passage",
                    "image": "",
                    "latitud": 13.045044,
                    "longitud": -120.640251
                },...]
            `

* **Code:** 204 NOT CONTENT <br />
    **Content:** ``
 
* **Error Response:**
  * **Code:** 500 SERVER ERROR <br />
    **Content:** `Error.message`
      
 ---     
* **URL**

  /filter/:text
  
* **Method:**
    `GET`      
* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{
                    "_id": "59e8e2a03ab7d4019e3f4a48",
                    "name": "Brekke Inc",
                    "starts": 4,
                    "price": 463,
                    "address": "1398 Crystel Passage",
                    "image": "",
                    "latitud": 13.045044,
                    "longitud": -120.640251
                },...]
            `

* **Code:** 204 NOT CONTENT <br />
    **Content:** ``
 
* **Error Response:**
  * **Code:** 500 SERVER ERROR <br />
    **Content:** `Error.message`
      
---