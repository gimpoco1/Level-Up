import dynamic from 'next/dynamic';

const ProfileWithNoSSR = dynamic(() => import('../components/Profile'), { ssr: false });

export default function ProfilePage() {
    return <ProfileWithNoSSR />;
}
