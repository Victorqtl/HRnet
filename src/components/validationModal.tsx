import { X } from 'lucide-react';
import { useState } from 'react';

export default function ValidationModal() {
	const [closeModal, setCloseModal] = useState(false);
	return (
		<>
			{!closeModal ? (
				<div className='fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black/30'>
					<div className='flex relative justify-center items-center w-[300px] h-[100px] bg-white rounded-xl border border-[#011f46]'>
						<p>Employee Created !</p>
						<button
							onClick={() => setCloseModal(!closeModal)}
							className='absolute top-1 right-1 p-1 rounded-full bg-[#011f46]'>
							<X
								color='white'
								size={16}
							/>
						</button>
					</div>
				</div>
			) : null}
		</>
	);
}
