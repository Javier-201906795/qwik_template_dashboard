import { component$ } from '@builder.io/qwik';

export const TableOne = component$(() => {
    
    return(
        <>
        <div >
            <div
                class="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-lg  sm:px-7.5 xl:pb-1">
                <h4 class="mb-6 text-xl font-bold text-black ">
                    Top Channels
                </h4>

                <div class="flex flex-col">
                    <div class="grid grid-cols-3 rounded-sm bg-gray-2 sm:grid-cols-5">
                    <div class="p-2.5 xl:p-5">
                        <h5 class="text-sm font-medium uppercase xsm:text-base">Source</h5>
                    </div>
                    <div class="p-2.5 text-center xl:p-5">
                        <h5 class="text-sm font-medium uppercase xsm:text-base">Visitors</h5>
                    </div>
                    <div class="p-2.5 text-center xl:p-5">
                        <h5 class="text-sm font-medium uppercase xsm:text-base">Revenues</h5>
                    </div>
                    <div class="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 class="text-sm font-medium uppercase xsm:text-base">Sales</h5>
                    </div>
                    <div class="hidden p-2.5 text-center sm:block xl:p-5">
                        <h5 class="text-sm font-medium uppercase xsm:text-base">Conversion</h5>
                    </div>
                    </div>

                    <div class="grid grid-cols-3 border-b border-stroke sm:grid-cols-5">
                    <div class="flex items-center gap-3 p-2.5 xl:p-5">
                        <div class="flex-shrink-0">
                        <img src="https://free-demo.tailadmin.com/src/images/brand/brand-01.svg" alt="Brand" />
                        </div>
                        <p class="hidden font-medium text-black  sm:block">
                        Google
                        </p>
                    </div>

                    <div class="flex items-center justify-center p-2.5 xl:p-5">
                        <p class="font-medium text-black ">3.5K</p>
                    </div>

                    <div class="flex items-center justify-center p-2.5 xl:p-5">
                        <p class="font-medium text-meta-3">$5,768</p>
                    </div>

                    <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                        <p class="font-medium text-black ">590</p>
                    </div>

                    <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                        <p class="font-medium text-meta-5">4.8%</p>
                    </div>
                    </div>

                    <div class="grid grid-cols-3 border-b border-stroke  sm:grid-cols-5">
                    <div class="flex items-center gap-3 p-2.5 xl:p-5">
                        <div class="flex-shrink-0">
                        <img src="https://free-demo.tailadmin.com/src/images/brand/brand-02.svg" alt="Brand" />
                        </div>
                        <p class="font-medium hidden text-black sm:block">Twitter</p>
                    </div>

                    <div class="flex items-center justify-center p-2.5 xl:p-5">
                        <p class="font-medium text-black ">2.2K</p>
                    </div>

                    <div class="flex items-center justify-center p-2.5 xl:p-5">
                        <p class="font-medium text-meta-3">$4,635</p>
                    </div>

                    <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                        <p class="font-medium text-black ">467</p>
                    </div>

                    <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                        <p class="font-medium text-meta-5">4.3%</p>
                    </div>
                    </div>

                    <div class="grid grid-cols-3 border-b border-stroke  sm:grid-cols-5">
                    <div class="flex items-center gap-3 p-2.5 xl:p-5">
                        <div class="flex-shrink-0">
                        <img src="https://free-demo.tailadmin.com/src/images/brand/brand-03.svg" alt="Brand" />
                        </div>
                        <p class="hidden font-medium text-black  sm:block">Github</p>
                    </div>

                    <div class="flex items-center justify-center p-2.5 xl:p-5">
                        <p class="font-medium text-black ">2.1K</p>
                    </div>

                    <div class="flex items-center justify-center p-2.5 xl:p-5">
                        <p class="font-medium text-meta-3">$4,290</p>
                    </div>

                    <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                        <p class="font-medium text-black ">420</p>
                    </div>

                    <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                        <p class="font-medium text-meta-5">3.7%</p>
                    </div>
                    </div>

                    <div class="grid grid-cols-3 border-b border-stroke  sm:grid-cols-5">
                    <div class="flex items-center gap-3 p-2.5 xl:p-5">
                        <div class="flex-shrink-0">
                        <img src="https://free-demo.tailadmin.com/src/images/brand/brand-04.svg" alt="Brand" />
                        </div>
                        <p class="hidden font-medium text-black sm:block">Vimeo</p>
                    </div>

                    <div class="flex items-center justify-center p-2.5 xl:p-5">
                        <p class="font-medium text-black ">1.5K</p>
                    </div>

                    <div class="flex items-center justify-center p-2.5 xl:p-5">
                        <p class="font-medium text-meta-3">$3,580</p>
                    </div>

                    <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                        <p class="font-medium text-black ">389</p>
                    </div>

                    <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                        <p class="font-medium text-meta-5">2.5%</p>
                    </div>
                    </div>

                    <div class="grid grid-cols-3 sm:grid-cols-5">
                    <div class="flex items-center gap-3 p-2.5 xl:p-5">
                        <div class="flex-shrink-0">
                        <img src="https://free-demo.tailadmin.com/src/images/brand/brand-05.svg" alt="Brand" />
                        </div>
                        <p class="hidden font-medium text-black  sm:block">Facebook</p>
                    </div>

                    <div class="flex items-center justify-center p-2.5 xl:p-5">
                        <p class="font-medium text-black ">1.2K</p>
                    </div>

                    <div class="flex items-center justify-center p-2.5 xl:p-5">
                        <p class="font-medium text-meta-3">$2,740</p>
                    </div>

                    <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                        <p class="font-medium text-black ">230</p>
                    </div>

                    <div class="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                        <p class="font-medium text-meta-5">1.9%</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
});