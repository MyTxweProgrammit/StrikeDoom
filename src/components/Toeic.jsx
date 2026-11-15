import react, { useState, useEffect } from 'react'

export default function Toeic({ logout }) {
    const [loading, setLoading] = useState(false);
    const [loading_double, setLoadingDouble] = useState(false);
    const [chatResponse, setChatResponse] = useState('');
    const handleCreateChat = async () => {
        setLoadingDouble(true);
        try {
            const response = await puter.ai.chat("What are the benefits of exercise?", { model: "gpt-5.4-nano" })
            setChatResponse(response.message?.content);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoadingDouble(false);
        }
    }
    const handlePlaySpeech = () => {
        alert("เสียงยังไม่สามารถใช้ได้ตอนนี้ \n The Soundtrack are unavaliable.")
        // setLoading(true);
        // puter.ai.txt2speech("[sarcastically] I Auan.", {
        //     provider: "elevenlabs",
        //     voice: "NOpBlnGInO9m6vDvFkFC",
        //     model: "eleven_v4"
        // })
        // .then(audio => {
        //     audio.play();
        // })
        // .catch(error => {
        //     console.error('Error:', error);
        // })
        // .finally(() => {
        //     setLoading(false);
        // });
    };
    return (
        <div className="google-sans px-[20px]">
            <p className='text-[40px] mt-[30px] w-[50%] font-bold'>รับประสบการณ์ใหม่ๆ ด้วยตัวคุณเอง</p>
            <p className='text-[20px] text-slate-400  w-[50%]'>ฝึกฝนทักษะภาษาอังกฤษเลย เรามี AI ผู้ช่วยในการอำนวยความสะดวกให้คุณทุกช่วงเวลา</p>
            <section className='flex w-fit gap-[15px] mt-[20px]'>
                <button onClick={handlePlaySpeech} className='bg-linear-to-r from-cyan-500 to-blue-500 text-white px-[12px] py-[10px] rounded-lg shadow-xl cursor-pointer duration-500 hover:scale-[1.04] active:scale-[1.04]'>
                    {loading ? "กำลังเปิดเสียง..." : "ฟังเสียงพูด"}
                </button>
                <button onClick={handleCreateChat} className='bg-linear-65 from-purple-500 to-pink-500 text-white px-[12px] py-[10px] rounded-lg shadow-xl cursor-pointer duration-500 hover:scale-[1.04] active:scale-[1.04]' disabled={loading_double}>
                    {loading_double ? "กำลังสร้างโจทย์..." : "สร้างโจทย์"}
                </button>
            </section>
            <p className='text-black mt-[20px]'>{chatResponse}</p>
        </div>
    )
}