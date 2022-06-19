import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const moralisAppId = "aU3MKaZWZd0XI1U124moGL1wNd5JOVCMxz9QZjgw";
const moralisServerURL = "https://i2dqz8g0ngda.usemoralis.com:2053/server";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={moralisAppId} serverUrl={moralisServerURL}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </MoralisProvider>
  </React.SrictMode>,
  document.getElementById("root")
);

const { fetch, data, error, isLoading } = useMoralisWeb3ApiCall(Web3Pai.account.getNativeBalance, { chain: chain, });

const {
  fetch: tokenFetch,
  data: tokenData,
  error: toeknError,
  isLoading: tokenIsLoading,
} = useMoralisWeb3ApiCall(Web3Api.account.getTokenBalances, { chain: chain, });

const {
  fetch: nftFetch,
  data: nftData,
  error: nftError,
  isLoading: nftLoading,
} = useMoralisWeb3ApiCall(Web3Api.account.getNFTs, { chain: chain, });

useEffect(() => {
  //call API every 5 sec  
    

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
