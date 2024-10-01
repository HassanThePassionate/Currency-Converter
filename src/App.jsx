import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox";
import { MdSwapCalls } from "react-icons/md";
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-[#1A1A1E]'>
      <div className='w-full max-w-md mx-auto bg-[#262629] border border-[#2f3032]  rounded-2xl '>
        <div className='border-b border-[#2f3032] text-[#89898b]  p-4'>
          <h1 className='text-xl font-medium tracking-wide'>
            Currency Converter
          </h1>
        </div>
        <div className='p-4'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className='w-full mb-1'>
              <InputBox
                label='From'
                currencyOption={options}
                amount={amount}
                onAmountChange={setAmount}
                onCurrencyChange={setFrom}
                selectedCurrency={from}
              />
            </div>
            <div className='relative w-full h-0.5'>
              <button
                onClick={swap}
                type='button'
                className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border border-[#2f3032] rounded-full bg-[#1E1E20] text-white p-3'
              >
                <MdSwapCalls size={22} />
              </button>
            </div>
            <div className='w-full mt-1 mb-4'>
              <InputBox
                label='To'
                currencyOption={options}
                amount={convertedAmount}
                onAmountChange={setConvertedAmount}
                onCurrencyChange={setTo}
                selectedCurrency={to}
              />
            </div>
            <button
              type='submit'
              onClick={convert}
              className='w-full border-[#2f3032] border bg-[#1E1E20] text-white px-4 py-3 rounded-lg'
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
