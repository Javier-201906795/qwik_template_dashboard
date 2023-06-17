import { component$, useSignal } from '@builder.io/qwik';

export default component$(() => {

    const checkbox01 = useSignal(false)

    return (
        <>
            {/* <!-- ====== Form Layout Section Start --> */}
            <div class="grid grid-cols-1 gap-9 sm:grid-cols-2">
                <div class="flex flex-col gap-9">
                    {/* <!-- Contact Form --> */}
                    <div
                        class="rounded-sm border border-stroke bg-white shadow-xl ">
                        <div class="border-b border-stroke py-4 px-6.5 ">
                        <h3 class="font-semibold text-black ">
                            Contact Form
                        </h3>
                        </div>
                        <form action="#">
                        <div class="p-6.5">
                            <div class="mb-4.5 flex flex-col gap-6 xl:flex-row">
                            <div class="w-full xl:w-1/2">
                                <label class="mb-2.5 block text-black ">
                                First name
                                </label>
                                <input type="text" placeholder="Enter your first name"
                                class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter " />
                            </div>

                            <div class="w-full xl:w-1/2">
                                <label class="mb-2.5 block text-black ">
                                Last name
                                </label>
                                <input type="text" placeholder="Enter your last name"
                                class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter" />
                            </div>
                            </div>

                            <div class="mb-4.5">
                            <label class="mb-2.5 block text-black ">
                                Email <span class="text-meta-1">*</span>
                            </label>
                            <input type="email" placeholder="Enter your email address"
                                class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter" />
                            </div>

                            <div class="mb-4.5">
                            <label class="mb-2.5 block text-black ">
                                Subject
                            </label>
                            <input type="text" placeholder="Select subject"
                                class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter" />
                            </div>

                            <div class="mb-4.5">
                            <label class="mb-2.5 block text-black ">
                                Subject
                            </label>
                            <div class="relative z-20 bg-transparent ">
                                <select
                                class="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary ">
                                <option value="">Type your subject</option>
                                <option value="">USA</option>
                                <option value="">UK</option>
                                <option value="">Canada</option>
                                </select>
                                <span class="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                                <svg class="fill-current" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.8">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                        fill=""></path>
                                    </g>
                                </svg>
                                </span>
                            </div>
                            </div>

                            <div class="mb-6">
                            <label class="mb-2.5 block text-black ">
                                Message
                            </label>
                            <textarea rows={6} placeholder="Type your message"
                                class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter "></textarea>
                            </div>

                            <button class="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                            Send Message
                            </button>
                        </div>
                        </form>
                    </div>
                </div>

                <div class="flex flex-col gap-9">
                {/* <!-- Sign In Form --> */}
                <div
                    class="rounded-sm border border-stroke bg-white shadow-xl  ">
                    <div class="border-b border-stroke py-4 px-6.5 ">
                    <h3 class="font-semibold text-black ">
                        Sign In Form
                    </h3>
                    </div>
                    <form action="#">
                    <div class="p-6.5">
                        <div class="mb-4.5">
                        <label class="mb-2.5 block text-black ">
                            Email
                        </label>
                        <input type="email" placeholder="Enter your email address"
                            class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter " />
                        </div>

                        <div>
                        <label class="mb-2.5 block text-black ">
                            Password
                        </label>
                        <input type="password" placeholder="Enter password"
                            class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter " />
                        </div>

                        <div class="mt-5 mb-5.5 flex items-center justify-between gap-2">
                        <div class="flex">
                            <div class="relative pt-0.5 " 
                            onClick$={()=>{
                                checkbox01.value = !checkbox01.value
                            }}>
                                <input type="checkbox" id="formCheckbox" class="taskCheckbox sr-only"
                                />
                                <div
                                class={`mr-4 flex h-5 w-5 items-center justify-center rounded-full border ${
                                    checkbox01.value ? 'border-primary' : ''
                                }`}>
                                <span 
                                    class={`h-2.5 w-2.5 rounded-full bg-transparent ${
                                        checkbox01.value ? '!bg-primary' : ''
                                    }`}>
                                </span>
                                </div>
                            </div>
                        <label for="formCheckbox" class="flex cursor-pointer ">
                            <p>Remember me</p>
                        </label>
                        </div>

                        <a href="#" class="text-sm text-primary ">Forget password?</a>
                        </div>

                        <button class="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                        Sign In
                        </button>
                    </div>
                    </form>
                </div>

                {/* <!-- Sign Up Form --> */}
                <div
                    class="rounded-sm border border-stroke bg-white shadow-xl  ">
                    <div class="border-b border-stroke py-4 px-6.5 ">
                    <h3 class="font-semibold text-black ">
                        Sign Up Form
                    </h3>
                    </div>
                    <form action="#">
                    <div class="p-6.5">
                        <div class="mb-4.5">
                        <label class="mb-2.5 block text-black ">
                            Name
                        </label>
                        <input type="text" placeholder="Enter your full name"
                            class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter " />
                        </div>

                        <div class="mb-4.5">
                        <label class="mb-2.5 block text-black ">
                            Email
                        </label>
                        <input type="email" placeholder="Enter your email address"
                            class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter " />
                        </div>

                        <div class="mb-4.5">
                        <label class="mb-2.5 block text-black ">
                            Password
                        </label>
                        <input type="password" placeholder="Enter password"
                            class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter " />
                        </div>

                        <div class="mb-5.5">
                        <label class="mb-2.5 block text-black ">
                            Re-type Password
                        </label>
                        <input type="password" placeholder="Re-enter password"
                            class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter " />
                        </div>

                        <button class="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                        Sign Up
                        </button>
                    </div>
                    </form>
                </div>
                </div>



            </div>
        </>
    )
});