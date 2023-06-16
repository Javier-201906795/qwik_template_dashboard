import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {

    const checkbox01 = useSignal(false)
    const checkbox02 = useSignal(false)

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
                                        checkbox01.value && 'bg-primary'
                                    }`}></div>
                                    <div class={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition${
                                        checkbox01.value && '!right-1 !translate-x-full '
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
                                        checkbox02.value && 'bg-primary'
                                    }`}></div>
                                    <div class={` absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition
                                    ${
                                        checkbox02.value && '!right-1 !translate-x-full ' 
                                    }`}
                                    >
                                    <span class={`hidden ${checkbox02.value && '!block text-black'}`} >
                                        <svg class="stroke-current  text-black" width="11" height="8" viewBox="0 0 11 8" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                            fill="black" stroke="black" stroke-width="0.4"></path>
                                        </svg>
                                    </span>
                                    <span class={`${checkbox02.value && 'hidden'}`}>
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
                    </div>   
                </div>
                {/* <!-- ====== Form Elements Section End --> */}
            </div>
        </main>
        {/* // <!-- ===== Main Content End ===== --> */}
        </>
    )
});