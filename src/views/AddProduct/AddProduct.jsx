import AppInput from '../../components/AppInput/AppInput.jsx';
import AppButton from '../../components/AppButton.jsx';

function AddProduct() {
	return (
		<form action="" className="w-9/12 mx-auto mb-12 space-y-10">
			<h1 className="form-title form-container text-2xl text-gray-700 pt-4 pb-2 border-b-2 border-slate-200 sm:mb-16 lg:mb-24">
				Add New Product*:
			</h1>

			<div className="form-fields form-container mx-auto space-y-10 sm:space-y-16  md:mt-16 md:space-y-20 lg:space-y-24">
				<div className="form-field">
					<label htmlFor="product-name">Product Name*:</label>
					<AppInput type="text" id="product-name" required />
				</div>

				<div className="form-field">
					<label htmlFor="sku">SKU:</label>
					<AppInput type="text" id="sku" required />
				</div>

				<div className="form-field">
					<label htmlFor="barcode-type">Barcode type*:</label>
					<AppInput
						type="text"
						id="barcode-type"
						list="barcode-types"
						required
					/>
					<datalist id="barcode-types">
						<option value="TYPE_1">TYPE_1</option>
						<option value="TYPE_2">TYPE_2</option>
						<option value="TYPE_3">TYPE_3</option>
					</datalist>
				</div>

				<AppButton>Save Product</AppButton>
			</div>
		</form>
	);
}

export default AddProduct;
