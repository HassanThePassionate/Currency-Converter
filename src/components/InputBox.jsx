/* eslint-disable react/prop-types */

const InputBox = ({
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
}) => {
  return (
    <>
      <div className='w-full bg-[#1E1E20] border border-[#2f3032] rounded-2xl flex items-center py-2 h-[60px] px-4  text-white'>
        <input
          className='outline-none w-full bg-transparent py-1.5'
          type='number'
          placeholder='Amount'
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
        <div className=' flex flex-wrap justify-end '>
          <select
            className=' w-full h-fit  bg-[#1E1E20] font-medium  text-white text-sm border border-[#2f3032] rounded pl-4 py-2 transition duration-300 ease focus:outline-none   shadow-sm focus:shadow-md appearance-none cursor-pointer'
            value={selectedCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={currencyDisabled}
          >
            {currencyOption.map((currency) => (
              <option value={currency} key={currency}>
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default InputBox;
