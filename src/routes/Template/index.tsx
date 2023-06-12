import { component$ } from '@builder.io/qwik';
import { Sidebar } from '~/components/Template/Sidebar';

export default component$(() => {
    
    return(
        <>
        <div class="dark:bg-boxdark-2 dark:text-bodydark">
            {/* <!-- ===== Page Wrapper Start ===== --> */}
            <div class="flex h-screen overflow-hidden">
                <Sidebar/>
                {/* <!-- ===== Content Area Start ===== --> */}
                <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                {/* <!-- ===== Header Start ===== --> */}
                {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
                <span>HeADER</span>
                {/* <!-- ===== Header End ===== --> */}

                {/* <!-- ===== Main Content Start ===== --> */}
                <main>
                    <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                    <span class="text-2xl">Hola</span>
                    </div>
                </main>
                {/* <!-- ===== Main Content End ===== --> */}
                </div>
                {/* <!-- ===== Content Area End ===== --> */}
            </div>
            {/* <!-- ===== Page Wrapper End ===== --> */}
        </div>
        </>
    )
});