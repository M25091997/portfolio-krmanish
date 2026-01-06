import Image from "next/image";

export default function ProfileImage() {
  return (
    
    <div className="flex justify-center">
      <div className="relative w-80 h-100 md:w-90 md:h-110 rounded-2xl overflow-hidden
                      animate-fadeIn">

        <Image
          src="/profile-image.png"
          alt="Manish Kumar"
          fill
          className="object-fit transition-transform duration-700 hover:scale-105"
          priority
          
        />

      </div>
    </div>
  );
}
