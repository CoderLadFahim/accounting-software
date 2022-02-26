import AppInput from '../../components/AppInput/AppInput.jsx';
import AppButton from '../../components/AppButton.jsx';

function AddProduct() {
	return (
		<form action="" className="w-9/12 mx-auto mb-12 space-y-10">
			<h1 className="form-title form-container text-2xl text-gray-700 pt-4 pb-2 border-b-2 border-slate-200 sm:mb-16 lg:mb-24">
				Add New Product
			</h1>

			<div className="form-fields form-container mx-auto space-y-10 sm:space-y-16  md:mt-16 md:space-y-20 lg:space-y-24">
				<div className="form-field">
					<label htmlFor="product-name">Product Name*:</label>
					<AppInput type="text" id="product-name" required />
				</div>

				<div className="form-field">
					<label htmlFor="product-description">Product Description:</label>
					<textarea
						id="product-description"
						name=""
						className="w-full bg-white h-60 rounded-lg shadow-md px-3 py-2  outline-none lg:h-64"
					></textarea>
				</div>

				<div className="form-field">
					<label htmlFor="img-upload">Add a product image:</label>
					<AppInput type="file" className="border-none border" />
				</div>

				<hr />

				<div className="form-field">
					<label htmlFor="product-name">Sub category name:</label>
					<AppInput type="text" id="product-name" required />
				</div>

				<div className="form-field">
					<label htmlFor="product-description">
						Sub Product Description:
					</label>
					<textarea
						id="product-description"
						name=""
						className="w-full bg-white h-60 rounded-lg shadow-md px-3 py-2  outline-none"
					></textarea>
				</div>

				<div className="form-field">
					<label htmlFor="img-upload">Add a sub product image:</label>
					<AppInput type="file" className="border-none border" />
				</div>

				<AppButton>Save Product</AppButton>
			</div>
		</form>
	);
}

export default AddProduct;
