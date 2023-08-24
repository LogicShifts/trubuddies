export default function UserProfile({ params }: any) {
    return (
      <div className="bg-white p-4 shadow-lg rounded-lg h-80 w-4/5 m-1/5">
        <img
          className="w-32 h-32 rounded-full mx-auto mt-[-80px] bg-blue-500"
          src="./next.svg"
          alt="Profile Picture"
        />
        <h1 className="text-2xl text-sky-500 font-bold mt-4">John Doe</h1>
        <p className="text-sky-600">Web Developer</p>
      </div>
    );

}