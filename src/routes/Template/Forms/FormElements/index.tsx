import { component$, useSignal } from '@builder.io/qwik';


export default component$(() => {


    const checkbox01 = useSignal(false)
    const checkbox02 = useSignal(false)

    const checkbox03 = useSignal(false)
    const checkbox04 = useSignal(false)
    const checkbox05 = useSignal(false)
    const checkbox06 = useSignal(false)
    const checkbox07 = useSignal(false)
    const checkbox08 = useSignal(false)

    return(
        <>
        {/* <!-- ===== Main Content Start ===== --> */}
        <main>
            <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                {/* <!-- Breadcrumb Start --> */}
                <div class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h2 class="text-title-md2 font-bold text-black ">
                    Form Elements
                    </h2>

                    <nav>
                    <ol class="flex items-center gap-2">
                        <li><a class="font-medium" href="#">Dashboard /</a></li>
                        <li class="font-medium text-primary">Form Elements</li>
                    </ol>
                    </nav>
                </div>
                {/* <!-- Breadcrumb End --> */}
                {/* <!-- ====== Form Elements Section Start --> */}
                <div class="grid grid-cols-1 gap-9 sm:grid-cols-2">
                    <div class="flex flex-col gap-9">

                        {/* <!-- Input Fields --> */}
                        <div
                            class="rounded-sm border border-stroke bg-white shadow-xl ">
                            <div class="border-b border-stroke py-4 px-6.5 ">
                            <h3 class="font-medium text-black ">
                                Input Fields
                            </h3>
                            </div>
                            <div class="flex flex-col gap-5.5 p-6.5">
                            <div>
                                <label class="mb-3 block font-medium text-sm text-black ">
                                Default Input
                                </label>
                                <input type="text" placeholder="Default Input"
                                class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter " />
                            </div>

                            <div>
                                <label class="mb-3 block font-medium text-sm text-black ">
                                Active Input
                                </label>
                                <input type="text" placeholder="Active Input"
                                class="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter " />
                            </div>

                            <div>
                                <label class="mb-3 block font-medium text-sm text-black ">
                                Disabled label
                                </label>
                                <input type="text" placeholder="Disabled label" disabled=""
                                class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter " />
                            </div>
                            </div>
                        </div>

                        {/* <!-- Toggle switch input --> */}
                        <div
                            class="rounded-sm border border-stroke bg-white shadow-xl ">
                            <div class="border-b border-stroke py-4 px-6.5 ">
                            <h3 class="font-medium text-black ">
                                Toggle switch input
                            </h3>
                            </div>
                            <div class="flex flex-col gap-5.5 p-6.5">
                            <div >
                                <label for="toggle1" class="flex cursor-pointer select-none items-center">
                                <div class="relative">
                                    <input type="checkbox" id="toggle1" class="sr-only"
                                    onClick$={()=>{
                                        checkbox01.value = !checkbox01.value
                                    }}
                                    />
                                    <div class={`block h-8 w-14 rounded-full bg-boxdark transition ${
                                        checkbox01.value ? 'bg-primary' : ''
                                    }`}></div>
                                    <div class={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition${
                                        checkbox01.value ? '!right-1 !translate-x-full ' : ''
                                    }`}></div>
                                </div>
                                </label>
                            </div>

                            <div>
                                <label for="toggle3" class="flex cursor-pointer select-none items-center">
                                <div class="relative">
                                    <input type="checkbox" id="toggle3" class="sr-only"
                                    onClick$={()=>{
                                        checkbox02.value = !checkbox02.value
                                    }}
                                    />
                                    <div class={`block h-8 w-14 rounded-full bg-boxdark transition ${
                                        checkbox02.value ? 'bg-primary' : ''
                                    }`}></div>
                                    <div class={` absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition
                                    ${
                                        checkbox02.value ? '!right-1 !translate-x-full ' : ''
                                    }`}
                                    >
                                    <span class={`hidden ${checkbox02.value ? '!block text-black' : ''}`} >
                                        <svg class="stroke-current  text-black" width="11" height="8" viewBox="0 0 11 8" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                            fill="black" stroke="black" stroke-width="0.4"></path>
                                        </svg>
                                    </span>
                                    <span class={`${checkbox02.value ? 'hidden' : ''}`}>
                                        <svg class="h-4 w-4 stroke-current" fill="none" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12"></path>
                                        </svg>
                                    </span>
                                    </div>
                                </div>
                                </label>
                            </div>

                            
                        </div>
                        </div>
                        
                        {/* <!-- Time and date --> */}
                        <div
                            class="rounded-sm border border-stroke bg-white shadow-xl ">
                            <div class="border-b border-stroke py-4 px-6.5 ">
                            <h3 class="font-medium text-black ">
                                Time and date
                            </h3>
                            </div>
                            <div class="flex flex-col gap-5.5 p-6.5">
                            <div>
                                <label class="mb-3 block font-medium text-sm text-black ">
                                Date picker
                                </label>
                                <div class="relative">
                                <input type="date"
                                    class="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary " />
                                </div>
                            </div>

                            <div>
                                <label class="mb-3 block font-medium text-sm text-black ">
                                Select date
                                </label>
                                <div class="relative">
                                <input type="date"
                                    class="custom-input-date custom-input-date-2 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary " />
                                </div>
                            </div>
                            </div>
                        </div>

                        {/* <!-- File upload --> */}
                        <div
                            class="rounded-sm border border-stroke bg-white shadow-xl ">
                            <div class="border-b border-stroke py-4 px-6.5 ">
                            <h3 class="font-medium text-black ">
                                File upload
                            </h3>
                            </div>
                            <div class="flex flex-col gap-5.5 p-6.5">
                            <div class="">
                                <label class="mb-3 block font-medium text-sm text-black ">
                                Attach file
                                </label>
                                <input type="file"
                                class="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none  hover:duration-300 file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-bodydark  file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-60 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter transition ease-in-out delay-150   duration-300" />
                            </div>

                            <div class="">
                                <label class="mb-3 block font-medium text-sm text-black ">
                                Attach file
                                </label>
                                <input type="file"
                                class="w-full  cursor-pointer file:cursor-pointer rounded-md border bg-boxdark text-white border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke  file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter " />
                            </div>
                            </div>
                        </div>

                    </div> 
                    <div class="flex flex-col gap-9">

                        {/* <!-- Textarea Fields --> */}
                        <div
                            class="rounded-sm border border-stroke bg-white shadow-xl  ">
                            <div class="border-b border-stroke py-4 px-6.5 ">
                            <h3 class="font-medium text-black ">
                                Textarea Fields
                            </h3>
                            </div>
                            <div class="flex flex-col gap-5.5 p-6.5">
                            <div>
                                <label class="mb-3 block font-medium text-sm text-black ">
                                Default textarea
                                </label>
                                <textarea rows={6} placeholder="Default textarea"
                                class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter "></textarea>
                            </div>


                            <div>
                                <label class="mb-3 block font-medium text-sm text-black ">
                                Active textarea
                                </label>
                                <textarea rows={6} placeholder="Active textarea"
                                class="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter "></textarea>
                            </div>

                            <div>
                                <label class="mb-3 block font-medium text-sm text-black ">
                                Disabled textarea
                                </label>
                                <textarea rows={6} disabled={true} placeholder="Disabled textarea"
                                class="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter "></textarea>
                            </div>
                        </div>
                        </div>

                        {/* <!-- Select input --> */}
                        <div
                            class="rounded-sm border border-stroke bg-white shadow-xl ">
                            <div class="border-b border-stroke py-4 px-6.5 ">
                            <h3 class="font-medium text-black ">
                                Select input
                            </h3>
                            </div>
                            <div class="flex flex-col gap-5.5 p-6.5">
                            <div>
                                <label class="mb-3 block font-medium text-sm text-black ">
                                Select Country
                                </label>
                                <div class="relative z-20 bg-white ">
                                <span class="absolute top-1/2 left-4 z-30 -translate-y-1/2">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.8">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M10.0007 2.50065C5.85852 2.50065 2.50065 5.85852 2.50065 10.0007C2.50065 14.1428 5.85852 17.5007 10.0007 17.5007C14.1428 17.5007 17.5007 14.1428 17.5007 10.0007C17.5007 5.85852 14.1428 2.50065 10.0007 2.50065ZM0.833984 10.0007C0.833984 4.93804 4.93804 0.833984 10.0007 0.833984C15.0633 0.833984 19.1673 4.93804 19.1673 10.0007C19.1673 15.0633 15.0633 19.1673 10.0007 19.1673C4.93804 19.1673 0.833984 15.0633 0.833984 10.0007Z"
                                        fill="#637381"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M0.833984 9.99935C0.833984 9.53911 1.20708 9.16602 1.66732 9.16602H18.334C18.7942 9.16602 19.1673 9.53911 19.1673 9.99935C19.1673 10.4596 18.7942 10.8327 18.334 10.8327H1.66732C1.20708 10.8327 0.833984 10.4596 0.833984 9.99935Z"
                                        fill="#637381"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M7.50084 10.0008C7.55796 12.5632 8.4392 15.0301 10.0006 17.0418C11.5621 15.0301 12.4433 12.5632 12.5005 10.0008C12.4433 7.43845 11.5621 4.97153 10.0007 2.95982C8.4392 4.97153 7.55796 7.43845 7.50084 10.0008ZM10.0007 1.66749L9.38536 1.10547C7.16473 3.53658 5.90275 6.69153 5.83417 9.98346C5.83392 9.99503 5.83392 10.0066 5.83417 10.0182C5.90275 13.3101 7.16473 16.4651 9.38536 18.8962C9.54325 19.069 9.76655 19.1675 10.0007 19.1675C10.2348 19.1675 10.4581 19.069 10.6159 18.8962C12.8366 16.4651 14.0986 13.3101 14.1671 10.0182C14.1674 10.0066 14.1674 9.99503 14.1671 9.98346C14.0986 6.69153 12.8366 3.53658 10.6159 1.10547L10.0007 1.66749Z"
                                        fill="#637381"></path>
                                    </g>
                                    </svg>
                                </span>
                                <select
                                    class="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-12 outline-none transition focus:border-primary active:border-primary ">
                                    <option value="">USA</option>
                                    <option value="">UK</option>
                                    <option value="">Canada</option>
                                </select>
                                <span class="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.8">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                        fill="#637381"></path>
                                    </g>
                                    </svg>
                                </span>
                                </div>
                            </div>

                            <div>
                                <label class="mb-3 block font-medium text-sm text-black e">
                                Multiselect Dropdown
                                </label>
                                <div
                                class="relative z-20 w-full rounded border border-stroke p-1.5 pr-8 font-medium outline-none transition focus:border-primary active:border-primary ">
                                <div class="flex flex-wrap items-center">
                                    <span
                                    class="m-1.5 flex items-center justify-center rounded border-[.5px] border-stroke  py-1.5 px-2.5 text-sm font-medium">
                                    Design
                                    <span class="cursor-pointer pl-2 hover:text-danger">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M9.35355 3.35355C9.54882 3.15829 9.54882 2.84171 9.35355 2.64645C9.15829 2.45118 8.84171 2.45118 8.64645 2.64645L6 5.29289L3.35355 2.64645C3.15829 2.45118 2.84171 2.45118 2.64645 2.64645C2.45118 2.84171 2.45118 3.15829 2.64645 3.35355L5.29289 6L2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L6 6.70711L8.64645 9.35355C8.84171 9.54882 9.15829 9.54882 9.35355 9.35355C9.54882 9.15829 9.54882 8.84171 9.35355 8.64645L6.70711 6L9.35355 3.35355Z"
                                            fill="currentColor"></path>
                                        </svg>
                                    </span>
                                    </span>
                                    <span
                                    class="m-1.5 flex items-center justify-center rounded border-[.5px] border-stroke  bg-gray  py-1.5 px-2.5 text-sm font-medium">
                                    Development
                                    <span class="cursor-pointer pl-2 hover:text-danger">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M9.35355 3.35355C9.54882 3.15829 9.54882 2.84171 9.35355 2.64645C9.15829 2.45118 8.84171 2.45118 8.64645 2.64645L6 5.29289L3.35355 2.64645C3.15829 2.45118 2.84171 2.45118 2.64645 2.64645C2.45118 2.84171 2.45118 3.15829 2.64645 3.35355L5.29289 6L2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L6 6.70711L8.64645 9.35355C8.84171 9.54882 9.15829 9.54882 9.35355 9.35355C9.54882 9.15829 9.54882 8.84171 9.35355 8.64645L6.70711 6L9.35355 3.35355Z"
                                            fill="currentColor"></path>
                                        </svg>
                                    </span>
                                    </span>
                                </div>
                                <select name="" id="" class="absolute top-0 left-0 z-20 h-full w-full bg-transparent opacity-0">
                                    <option value="">Option</option>
                                    <option value="">Option</option>
                                </select>
                                <span class="absolute top-1/2 right-4 z-10 -translate-y-1/2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.8">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                        fill="#637381"></path>
                                    </g>
                                    </svg>
                                </span>
                                </div>
                            </div>
                            </div>
                        </div>

                        {/* <!-- Checkbox and radio --> */}
                        <div
                            class="rounded-sm border border-stroke bg-white shadow-xl ">
                            <div class="border-b border-stroke py-4 px-6.5 ">
                            <h3 class="font-medium text-black ">
                                Checkbox and radio
                            </h3>
                            </div>
                            <div class="flex flex-col gap-5.5 p-6.5">
                            {/* Checkbox03 */}
                            <div >
                                <label for="checkboxLabelOne" class="flex cursor-pointer select-none items-center">
                                <div class="relative">
                                    <input type="checkbox" id="checkboxLabelOne" class="sr-only"
                                    onClick$={()=>{
                                        checkbox03.value = !checkbox03.value 
                                    }} />
                                    <div 
                                    class={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
                                        checkbox03.value ? 'border-primary bg-gray' : ''
                                    }`}>
                                    <span class={`h-2.5 w-2.5 rounded-sm ${
                                        checkbox03.value ? 'bg-primary' : ''
                                    }`}></span>
                                    </div>
                                </div>
                                Checkbox Text
                                </label>
                            </div>
                            {/* Checkbox04 */}
                            <div>
                                <label for="checkboxLabelTwo" class="flex cursor-pointer select-none items-center">
                                <div class="relative">
                                    <input type="checkbox" id="checkboxLabelTwo" class="sr-only"
                                    onClick$={()=>{
                                        checkbox04.value = !checkbox04.value
                                    }}
                                    />
                                    <div 
                                    class={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
                                        checkbox04.value ? 'border-primary bg-gray' : ''
                                    }`}>
                                    <span class={`opacity-0 ${
                                        checkbox04.value ? '!opacity-100' : ''
                                    }`}>
                                        <svg width="11" height="8" viewBox="0 0 11 8" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                            fill="#3056D3" stroke="#3056D3" stroke-width="0.4"></path>
                                        </svg>
                                    </span>
                                    </div>
                                </div>
                                Checkbox Text
                                </label>
                            </div>
                            
                            </div> 
                        </div>

                        
                    </div>   
                </div>
                {/* <!-- ====== Form Elements Section End --> */}
            </div>
        </main>
        {/* // <!-- ===== Main Content End ===== --> */}
        </>
    )
});