import { type PropFunction, component$ } from '@builder.io/qwik';
import { Searchbar } from './Searchbar';

interface Props{
    openSidebar     : PropFunction<()=> void>,
}


export const Header =  component$(({openSidebar}:Props) => {

    
    return(
        <>
        <header class="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 ">
            <div class="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
                <div class="flex items-center gap-2 sm:gap-4 lg:hidden">
                    {/* <!-- Hamburger Toggle BTN --> */}
                    <button
                        onClick$={()=>{
                            openSidebar()
                        }}
                        class="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden">
                        <span class="relative block h-5.5 w-5.5 cursor-pointer">
                        <span class="du-block absolute right-0 h-full w-full">
                            <span
                            class="relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out ">
                            </span>
                            <span
                            class="relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out ">
                            </span>
                            <span
                            class="relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out ">
                            </span>
                        </span>
                        <span class="du-block absolute right-0 h-full w-full rotate-45">
                            <span
                            class="absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out ">
                            </span>
                            <span
                            class="delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out ">
                            </span>
                        </span>
                        </span>
                    </button>
                    {/* // <!-- Hamburger Toggle BTN --> */}
                    
                    {/* Busquedad Pequeño */}
                    <div class=" sm:block">
                        <Searchbar/>
                    </div>
                    {/* Fin Busquedad Pequeño */}


                </div>
                {/* Busquedad Pequeño */}
                <div class="lg:block md:hidden">
                    <Searchbar/>
                </div>
                {/* Fin Busquedad Pequeño */}
            </div>
            </header>
        
        </>
    )
});