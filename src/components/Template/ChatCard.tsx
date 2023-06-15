import { component$ } from '@builder.io/qwik';

export const ChatCard =  component$(() => {
    return(
        <>
        <div>
        {/* <!-- ====== Chat Card Start --> */}
            <div
                class="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-lg xl:col-span-4">
                <h4 class="mb-6 px-7.5 text-xl font-bold text-black ">
                    Chats
                </h4>
            
                <div>
                    <a href="messages.html" class="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 ">
                    <div class="relative h-14 w-14 rounded-full">
                        <img src="https://free-demo.tailadmin.com/src/images/user/user-03.png" alt="User" />
                        <span class="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-3"></span>
                    </div>
            
                    <div class="flex flex-1 items-center justify-between">
                        <div>
                        <h5 class="font-medium text-black ">
                            Devid Heilo
                        </h5>
                        <p>
                            <span class="text-sm font-medium text-black ">Hello, how are you?</span>
                            <span class="text-xs"> . 12 min</span>
                        </p>
                        </div>
                        <div class="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                        <span class="text-sm font-medium text-white">3</span>
                        </div>
                    </div>
                    </a>
                    <a href="messages.html" class="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 ">
                    <div class="relative h-14 w-14 rounded-full">
                        <img src="https://free-demo.tailadmin.com/src/images/user/user-04.png" alt="User" />
                        <span class="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-3"></span>
                    </div>
            
                    <div class="flex flex-1 items-center justify-between">
                        <div>
                        <h5 class="font-medium">Henry Fisher</h5>
                        <p>
                            <span class="text-sm font-medium">I am waiting for you</span>
                            <span class="text-xs"> . 5:54 PM</span>
                        </p>
                        </div>
                    </div>
                    </a>
                    <a href="messages.html" class="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 ">
                    <div class="relative h-14 w-14 rounded-full">
                        <img src="https://free-demo.tailadmin.com/src/images/user/user-05.png" alt="User" />
                        <span class="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-6"></span>
                    </div>
            
                    <div class="flex flex-1 items-center justify-between">
                        <div>
                        <h5 class="font-medium">Wilium Smith</h5>
                        <p>
                            <span class="text-sm font-medium">Where are you now?</span>
                            <span class="text-xs"> . 10:12 PM</span>
                        </p>
                        </div>
                    </div>
                    </a>
                    <a href="messages.html" class="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 ">
                    <div class="relative h-14 w-14 rounded-full">
                        <img src="https://free-demo.tailadmin.com/src/images/user/user-01.png" alt="User" />
                        <span class="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-3"></span>
                    </div>
            
                    <div class="flex flex-1 items-center justify-between">
                        <div>
                        <h5 class="font-medium text-black ">
                            Henry Deco
                        </h5>
                        <p>
                            <span class="text-sm font-medium text-black ">Thank you so much!</span>
                            <span class="text-xs"> . Sun</span>
                        </p>
                        </div>
                        <div class="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                        <span class="text-sm font-medium text-white">2</span>
                        </div>
                    </div>
                    </a>
                    <a href="messages.html" class="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 ">
                    <div class="relative h-14 w-14 rounded-full">
                        <img src="https://free-demo.tailadmin.com/src/images/user/user-02.png" alt="User" />
                        <span class="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-7"></span>
                    </div>
            
                    <div class="flex flex-1 items-center justify-between">
                        <div>
                        <h5 class="font-medium">Jubin Jack</h5>
                        <p>
                            <span class="text-sm font-medium">I really love that!</span>
                            <span class="text-xs"> . Oct 23</span>
                        </p>
                        </div>
                    </div>
                    </a>
                    <a href="messages.html" class="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3">
                    <div class="relative h-14 w-14 rounded-full">
                        <img src="https://free-demo.tailadmin.com/src/images/user/user-05.png" alt="User" />
                        <span class="absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-meta-6"></span>
                    </div>
            
                    <div class="flex flex-1 items-center justify-between">
                        <div>
                        <h5 class="font-medium">Wilium Smith</h5>
                        <p>
                            <span class="text-sm font-medium">Where are you now?</span>
                            <span class="text-xs"> . Sep 20</span>
                        </p>
                        </div>
                    </div>
                    </a>
                </div>
            </div>
        {/* <!-- ====== Chat Card End --> */}
        </div>
        </>
    )
});