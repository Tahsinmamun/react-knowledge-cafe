import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between max-w-7xl mx-auto p-4 items-center border-b-4'>
            <h3 className='text-4xl font-bold'>Knowlege Cafe</h3>
            <img src={profile} alt="" />
            
        </div>
    );
};

export default Header;