export default function Header() {
    return (
        <div className="sticky top-0 flex justify-between items-center bg-orange-200 p-2">
            <h1 className=" text-3xl font-bold text-orange-800">upLife</h1>
            <div>
                <a href="/signup" className="mr-4 text-xl hover:underline">Sign Up</a>
                <a href="/login" className="text-xl hover:underline">Login</a>
            </div>
            
        </div>
    )
}