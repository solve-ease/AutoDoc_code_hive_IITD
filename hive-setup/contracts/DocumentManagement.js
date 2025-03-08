// Hive Engine Smart Contract for Document Management
class DocumentManagement {
    // Initialize the contract
    init() {
        // Define the documentsByOwner table
        this.documentsByOwner = new Map();
    }

    // Issue a document for a specified owner
    issueDocument(owner, cid, referenceId) {
        // Validate input
        if (!owner || !cid || !referenceId) {
            throw new Error("Invalid input");
        }

        // Create the new document
        const newDoc = {
            cid: cid,
            referenceId: referenceId
        };

        // Add the document to the owner's list of documents
        if (!this.documentsByOwner.has(owner)) {
            this.documentsByOwner.set(owner, []);
        }
        this.documentsByOwner.get(owner).push(newDoc);

        // Emit the event for document issuance
        this.emitEvent('DocumentIssued', { owner, cid, referenceId });
    }

    // Retrieve documents of a specific user
    getUserDocuments(owner) {
        // Validate input
        if (!owner) {
            throw new Error("Invalid owner address");
        }

        // Return the user's documents
        return this.documentsByOwner.get(owner) || [];
    }
}

// Export the contract
module.exports = DocumentManagement;