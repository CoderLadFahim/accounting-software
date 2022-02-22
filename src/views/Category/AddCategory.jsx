import './AddCategoryStyles.css';
import AppInput from '../../components/AppInput/AppInput.jsx';
import AppButton from '../../components/AppButton.jsx';

function AddCategory() {
	return (
		<form action="" className="w-9/12 mx-auto space-y-10 sm:w-7/12 md:w-6/12">
			<h1 className="form-title text-2xl text-gray-700 pt-4 pb-2 border-b-2 border-slate-200">
				Add Category
			</h1>

			<div className="form-fields space-y-10 sm:space-y-16 md:mt-16 md:space-y-20">
				<div className="form-field">
					<label htmlFor="category-name">Category Name*:</label>
					<AppInput type="text" id="category-name" required />
				</div>

				<div className="form-field">
					<label htmlFor="category-description">
						Category Description:
					</label>
					<textarea
						id="category-description"
						name=""
						className="w-full bg-white h-60 rounded-lg shadow-md px-3 py-2  outline-none"
					></textarea>
				</div>

				<div className="form-field">
					<label htmlFor="img-upload">Add a category image:</label>
					<AppInput type="file" className="border-none border" />
				</div>

				<AppButton>Save Category</AppButton>
			</div>
		</form>
	);
}

export default AddCategory;
