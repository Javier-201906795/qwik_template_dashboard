import { $, Slot, component$, useSignal } from '@builder.io/qwik';
import { Header } from '~/components/Template/Header';
import { Sidebar } from '~/components/Template/Sidebar';

export default component$(() => {

    const statusSidebar = useSignal(false)

    const chagestatusSidebar = $(()=>{
        statusSidebar.value = !statusSidebar.value
    })

    
    return(
        <>
        <div class="text-boxdark">
            {/* <!-- ===== Page Wrapper Start ===== --> */}
            <div class="flex h-screen overflow-hidden"
            onClick$={async (event)=>{
            //CLOSE SIDEBAR
                //Position cursor
                const cursorx = event.clientX
                //Get size sidebar
                const sidebar = document.getElementById("sidebar")
                const sidebartamaniox = sidebar?.getBoundingClientRect()?.width || 260 //px
                //Evaluae If its open
                if (statusSidebar.value){
                    //Evaluate position cursor
                    if (cursorx > sidebartamaniox){
                        statusSidebar.value = !statusSidebar.value
                    }
                }
                

            }}
            >
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