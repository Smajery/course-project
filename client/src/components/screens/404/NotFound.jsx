import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import {StyledNotFound} from '@/components/screens/404/StyledNotFound';
import NotFoundImg from '@/static/404.jpeg';

const NotFound = () => {
    return (
        <Layout title='Not found' description='404 - Page not found'>
            <StyledNotFound>
                <Image priority src={NotFoundImg} alt='' width={450} height={450}/>
            </StyledNotFound>
        </Layout>
    );
};

export default NotFound;