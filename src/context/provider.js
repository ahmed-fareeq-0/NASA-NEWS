import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const Context = createContext();


export const Provider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [postNasa, setPostNasa] = useState([]);
  const [marsRoverPhotosData, setMarsRoverPhotosData] = useState([]);

  const register = (name, email, password) => {
    axios
      .post("http://192.168.0.110:8080/register", {
        name,
        email,
        password,
      })
      .then(res => {
        setUserInfo(res.data);
      })
      .catch(e => {
        console.log(`login error ${e}`);
      });
  };

  const login = (email, password) => {
    setIsLoading(true);

    axios
      .post("http://192.168.0.110:8080/login", {
        email,
        password,
      })
      .then(async res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`login error ${e}`);
        Alert.alert("كلمة المرور غير صحيحة");
        setIsLoading(false);
      });
  };

  const getPostNasaSave = async () => {
    const keyApiNasa = "5XrGXKCx55JmtQxJoBMLcjECuxkIRTEhonKxEjRW";

    try {
      const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${keyApiNasa}`);
      const dataFromApi = response.data;

      const serverUrl = 'http://192.168.0.110:8080/getPostNasa';
      await axios.post(serverUrl, dataFromApi);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const getPostNasa = async () => {
    try {
      const serverUrl = 'http://192.168.0.110:8080/getPostNasa';
      await axios.get(serverUrl).then((resp => {
        console.log(resp.data);
        // setPostNasa((prevState) => [...prevState, resp.data]);
        setPostNasa(resp.data)
      })).catch(err => {
        console.log(err);
      })

    } catch (err) {
      console.error('Error fetching data:', error);
    }
  }


  const getMarsRoverPhotos = async () => {
    const keyApiNasa = "5XrGXKCx55JmtQxJoBMLcjECuxkIRTEhonKxEjRW"

    await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${keyApiNasa}`).then(resp => {
      setMarsRoverPhotosData(resp.data.photos);
      // console.log(resp.data.photos);

    }).catch(e => {
      console.log(e);
    })


  }


  useEffect(() => {
    getPostNasaSave()
    getPostNasa()
    getMarsRoverPhotos()
  }, [])
  const intervalInMilliseconds = 2 * 60 * 1000;

  // setInterval(() => {
  //   getPostNasaSave();
  // }, intervalInMilliseconds);




  return (
    <Context.Provider
      value={{
        userInfo,
        register,
        login,
        postNasa,
        marsRoverPhotosData,
      }}>
      {children}
    </Context.Provider>
  );
};