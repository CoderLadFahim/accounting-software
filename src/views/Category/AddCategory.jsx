import AppInput from '../../components/AppInput/AppInput.jsx';

function AddCategory() {
	return (
		<form action="">
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
		</form>
	);
}

export default AddCategory;
