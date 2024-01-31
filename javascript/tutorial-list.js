$(document).ready(function() {
	// Retrieve JSON data from "jsonexdata.json" file
	$.getJSON("gsg.json", function(data) {
		var unorderedList = $("#tutorial-list ul");

		// Iterate over each person object in the JSON data
		$.each(data, function(index, repo) {

			var list = $("<li></li>"); // Create a new list item
			
			// Documentation
			var $docs = $("<center></center>").html('<p><a href="' + repo.homepage +'" target="_blank" rel="noopener"><figure markdown=""><img alt="Tutorial Thumbnail" src="' + repo.homepage + '/assets/img/thumbnail.jpg"></figure></p><p><strong>' + repo.name.replace("SparkFun_", '').replace(/_/g, ' ') + ' Hookup Guide</strong></a></p>');
			list.append($docs);

			// Repo
			var $repo = $("<details></details>").html('<summary>GitHub Repository</summary><p><strong><a href="' + repo.url+ '" target="_blank" rel="noopener">' + repo.name + '</a></strong></p><hr><p><em>' + repo.description + '</em></p>');
			list.append($repo);

			unorderedList.append(list); // Add the item to the list
		});
	});
});