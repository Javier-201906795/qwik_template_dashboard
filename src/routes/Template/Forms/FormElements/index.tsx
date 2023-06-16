import { component$ } from '@builder.io/qwik';

export default component$(() => {
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
                    </div>    
                </div>
                {/* <!-- ====== Form Elements Section End --> */}
            </div>
        </main>
        {/* // <!-- ===== Main Content End ===== --> */}
        </>
    )
});