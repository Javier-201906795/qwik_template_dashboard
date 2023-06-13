import { $, Slot, component$, useSignal } from '@builder.io/qwik';
import { Header } from '~/components/Template/Header';
import { Sidebar } from '~/components/Template/Sidebar';

export default component$(() => {

    const statusSidebar = useSignal(false)

    const chagestatusSidebar = $(()=>{
        statusSidebar.value = !statusSidebar.value
        console.log(statusSidebar.value)
    })

    
    return(
        <>
        <div class="">
            {/* <!-- ===== Page Wrapper Start ===== --> */}
            <div class="flex h-screen overflow-hidden">
                <Sidebar 
                showSidebar = {statusSidebar.value}
                closeSidebar = {chagestatusSidebar}
                />
                {/* <!-- ===== Content Area Start ===== --> */}
                <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                {/* <!-- ===== Header Start ===== --> */}
                {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
                <Header
                openSidebar = {chagestatusSidebar}
                />
                {/* <!-- ===== Header End ===== --> */}

                {/* <!-- ===== Main Content Start ===== --> */}
                <main>
                    <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                    
                    <Slot />
                    
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