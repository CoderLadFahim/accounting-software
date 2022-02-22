import AppInput from '../../components/AppInput/AppInput.jsx';

function AddCategory() {
	return (
		<form action="" className="w-9/12 mx-auto">
			<h1>Add Category</h1>
			<div className="form-field">
				<label htmlFor="category-name">Category Name*:</label>
				<AppInput
					type="text"
					id="category-name"
					placeholder="Category name"
					required
				/>
			</div>

			<div className="form-field">
				<textarea
					placeholder="Category description"
					id=""
					name=""
					className="w-full bg-white h-60 rounded-lg shadow p-3"
				></textarea>
			</div>

			<div className="form-field">
				<AppInput type="file" />
			</div>
		</form>
	);
}

export default AddCategory;
