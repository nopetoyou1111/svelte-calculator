<script lang="ts">
  let NumberList: (number | string)[] = [];
  let VisibleNumber = "0";
  function ClearCalculator() {
    VisibleNumber = "0";
    NumberList.splice(0, NumberList.length);
  }
  function Calculate() {
    const Equation: string = NumberList.join("");
    let Result = eval(Equation);
    return Result;
  }
  function AddItem(Item: number | string) {
    if (VisibleNumber === "0") {
      VisibleNumber = "";
      VisibleNumber += Item.toString();
    } else {
      if (
        Item !== "*" &&
        Item !== "/" &&
        Item !== "+" &&
        Item !== "-" &&
        Item !== "%" &&
        Item !== "="
      ) {
        VisibleNumber += Item.toString();
      } else {
        if (Item === "=") {
          let CalculationAnswer = Calculate();
          VisibleNumber = CalculationAnswer.toString();
        } else {
          VisibleNumber = "0";
        }
      }
    }
    if (Item !== "=") {
      NumberList.push(Item);
    }
  }
  function ClearLast()
  {
    if (typeof NumberList[NumberList.length - 1] === 'number') {
        NumberList.pop();
    }
    if(1 < VisibleNumber.length)
    {
        VisibleNumber = VisibleNumber.slice(0, -1);
    }
    else{
      VisibleNumber = '0'
    }
  }
</script>

<svelte:head>
  <title>Svelte Calculator</title>
</svelte:head>
<body class="bg-black text-white">
  <h1 class="text-9xl text-right py-12 px-3 md:px-36 md:py-20">
    {VisibleNumber}
  </h1>
  <div class="grid grid-cols-4 gap-1 place-items-center">
    <div>
      <button
        class="bg-light-gray text-black rounded-full p-5 text-2xl font-extrabold"
        on:click={ClearCalculator}>AC</button
      >
    </div>
    <div>
      <button
        class="bg-light-gray text-black rounded-full p-5 text-2xl font-extrabold" on:click={() => ClearLast()}
        ><span class="p-2">C</span></button
      >
    </div>
    <div>
      <button
        class="bg-light-gray text-black rounded-full p-5 text-2xl font-extrabold"
        on:click={() => AddItem("%")}><span class="p-1">%</span></button
      >
    </div>
    <div>
      <button
        class="bg-orange text-white rounded-full p-5 text-2xl font-extrabold"
        on:click={() => AddItem("/")}><span class="p-2">÷</span></button
      >
    </div>
  </div>
  <div class="my-5"></div>
  <div class="grid grid-cols-4 gap-1 place-items-center">
    <div>
      <button
        class="bg-dark-gray text-white rounded-full p-5 text-2xl font-extrabold"
        on:click={() => AddItem(7)}><span class="p-3">7</span></button
      >
    </div>
    <div>
      <button
        class="bg-dark-gray text-white rounded-full p-5 text-2xl font-extrabold"
        on:click={() => AddItem(8)}><span class="p-3">8</span></button
      >
    </div>
    <div>
      <button
        class="bg-dark-gray text-white rounded-full p-5 text-2xl font-extrabold"
        on:click={() => AddItem(9)}><span class="p-3">9</span></button
      >
    </div>
    <div>
      <button
        class="bg-orange text-white rounded-full p-5 text-2xl font-extrabold"
        on:click={() => AddItem("*")}><span class="p-2">×</span></button
      >
    </div>
  </div>
  <div class="my-5"></div>
  <div class="grid grid-cols-4 gap-1 place-items-center">
    <div>
      <button
        class="bg-dark-gray text-white rounded-full p-5 text-2xl font-extrabold"
        on:click={() => AddItem(4)}><span class="p-3">4</span></button
      >
    </div>
    <div>
      <button
        class="bg-dark-gray text-white rounded-full p-5 text-2xl font-extrabold"
        on:click={() => AddItem(5)}><span class="p-3">5</span></button
      >
    </div>
    <div>
      <button
        class="bg-dark-gray text-white rounded-full p-5 text-2xl font-extrabold"
        on:click={() => AddItem(6)}><span class="p-3">6</span></button
      >
    </div>
    <div>
      <button
        class="bg-orange text-white rounded-full p-5 text-2xl font-extrabold"
        on:click={() => AddItem("-")}><span class="p-3">-</span></button
      >
    </div>
  </div>
  <div class="my-5"></div>
  <div class="grid grid-cols-4 gap-1 place-items-center">
    <div>
      <button
        class="bg-dark-gray text-white rounded-full p-5 text-2xl font-extrabold"
        on:click={() => AddItem(1)}><span class="p-3">1</span></button
      >
    </div>
    <div>
      <button
        class="bg-dark-gray text-white rounded-full p-5 text-2xl font-extrabold"
        on:click={() => AddItem(2)}><span class="p-3">2</span></button
      >
    </div>
    <div>
      <button
        class="bg-dark-gray text-white rounded-full p-5 text-2xl font-extrabold"
        on:click={() => AddItem(3)}><span class="p-3">3</span></button
      >
    </div>
    <div>
      <button
        class="bg-orange text-white rounded-full p-5 text-2xl font-extrabold"
        on:click={() => AddItem("+")}><span class="p-2">+</span></button
      >
    </div>
  </div>
  <div class="my-5"></div>
  <div class="grid grid-cols-4 gap-1 place-items-center">
    <div>
      <button
        class="bg-dark-gray text-white rounded-full p-5 text-2xl font-extrabold"
        on:click={() => AddItem(0)}><span class="p-3">0</span></button
      >
    </div>
    <div>
      <button
        class="bg-dark-gray text-white rounded-full p-5 text-2xl font-extrabold"
        on:click={() => AddItem(".")}><span class="p-3">.</span></button
      >
    </div>
    <div></div>
    <div>
      <button
        class="bg-orange text-white rounded-full p-5 text-2xl font-extrabold"
        on:click={() => AddItem("=")}><span class="p-2">=</span></button
      >
    </div>
  </div>
</body>

<style>
  @import "../main.css";
</style>
