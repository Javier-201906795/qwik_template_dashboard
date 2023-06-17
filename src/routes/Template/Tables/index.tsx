import { component$ } from '@builder.io/qwik';
import { TableOne } from '~/components/Template/TableOne';
import { TableThree } from '~/components/Template/TableThree';
import { TableTwo } from '~/components/Template/TableTwo';

export default component$(() => {
    
    return(
        <>
        <main>
            <div class="max-w-screen-2xl mx-auto p-4 md:p-6 2xl:p-10">
                <div class="flex flex-col gap-10">
                    <TableOne />
                    <TableTwo />
                    <TableThree/>
                </div>
            </div>
        </main>
        </>
    )
});